@file:Suppress("UNRESOLVED_REFERENCE")

package com.edpdfviewer

import android.content.Context
import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.pdf.PdfRenderer
import android.os.Build
import android.os.ParcelFileDescriptor
import android.util.AttributeSet
import android.view.View
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.events.RCTEventEmitter
import java.io.File
import java.io.IOException
import java.net.URL

class PdfViewerView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null
) : View(context, attrs) {

    private var bitmap: Bitmap? = null

    fun loadPdfFromUrl(urlString: String) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.LOLLIPOP) return

        Thread {
            try {
                val url = URL(urlString)

                // Gerçek dosya adını URL'den ayıkla
                val fileName = url.path.substringAfterLast("/")
                    .ifEmpty { "temp.pdf" } // fallback
                val pdfFile = File(context.cacheDir, fileName)

                url.openStream().use { input ->
                    pdfFile.outputStream().use { output ->
                        input.copyTo(output)
                    }
                }

                val fileDescriptor =
                    ParcelFileDescriptor.open(pdfFile, ParcelFileDescriptor.MODE_READ_ONLY)
                val renderer = PdfRenderer(fileDescriptor)

                if (renderer.pageCount > 0) {
                    val page = renderer.openPage(0)
                    bitmap = Bitmap.createBitmap(page.width, page.height, Bitmap.Config.ARGB_8888)
                    page.render(bitmap, null, null, PdfRenderer.Page.RENDER_MODE_FOR_DISPLAY)
                    page.close()
                    
                    // Success event
                    sendEvent("onLoadComplete", Arguments.createMap().apply {
                        putInt("pageCount", renderer.pageCount)
                    })
                }

                renderer.close()
                fileDescriptor.close()

                post { invalidate() }
            } catch (e: IOException) {
                e.printStackTrace()
                // Error event
                sendEvent("onError", Arguments.createMap().apply {
                    putString("error", e.message ?: "Unknown error")
                })
            }
        }.start()
    }
    
    private fun sendEvent(eventName: String, params: WritableMap) {
        val reactContext = context as ReactContext
        reactContext.getJSModule(RCTEventEmitter::class.java)
            .receiveEvent(id, eventName, params)
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        bitmap?.let {
            canvas.drawBitmap(it, 0f, 0f, null)
        }
    }
}