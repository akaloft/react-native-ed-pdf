package com.edpdfviewer

import android.view.View
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.EdPdfViewerManagerDelegate
import com.facebook.react.viewmanagers.EdPdfViewerManagerInterface

@ReactModule(name = EdPdfViewerManager.NAME)
class EdPdfViewerManager : SimpleViewManager<PdfViewerView>(), EdPdfViewerManagerInterface<PdfViewerView> {
  
  private val delegate: ViewManagerDelegate<PdfViewerView>

  init {
    delegate = EdPdfViewerManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<PdfViewerView>? {
    return delegate
  }

  override fun getName(): String = NAME

  public override fun createViewInstance(context: ThemedReactContext): PdfViewerView {
    return PdfViewerView(context)
  }

  @ReactProp(name = "source")
  override fun setSource(view: PdfViewerView, source: ReadableMap?) {
    source?.let { map ->
      if (map.hasKey("uri")) {
        val uri = map.getString("uri")
        uri?.let { view.loadPdfFromUrl(it) }
      }
    }
  }

  companion object {
    const val NAME = "EdPdfViewer"
  }
} 