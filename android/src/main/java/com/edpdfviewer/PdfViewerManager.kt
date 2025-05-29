@file:Suppress("UNRESOLVED_REFERENCE")

package com.edpdfviewer

import com.facebook.react.bridge.ReadableMap
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class PdfViewerManager : SimpleViewManager<PdfViewerView>() {

    override fun getName(): String = "EdPdfViewer"

    override fun createViewInstance(reactContext: ThemedReactContext): PdfViewerView {
        return PdfViewerView(reactContext)
    }

    @ReactProp(name = "source")
    fun setSource(view: PdfViewerView, source: ReadableMap?) {
        source?.let { map ->
            if (map.hasKey("uri")) {
                val uri = map.getString("uri")
                uri?.let { view.loadPdfFromUrl(it) }
            }
        }
    }
}