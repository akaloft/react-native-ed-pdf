package com.edpdfviewer

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class PdfViewerManager : SimpleViewManager<PdfViewerView>() {

    override fun getName(): String = "EdPdfViewer"

    override fun createViewInstance(reactContext: ThemedReactContext): PdfViewerView {
        return PdfViewerView(reactContext)
    }

    @ReactProp(name = "source")
    fun setSource(view: PdfViewerView, source: Map<String, String>) {
        val uri = source["uri"]
        if (!uri.isNullOrEmpty()) {
            view.loadPdfFromUrl(uri)
        }
    }
}