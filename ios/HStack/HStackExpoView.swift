import ExpoModulesCore
import SwiftUI

class HStackExpoView: ExpoView {
  let props: HStackProps
  let onSheetDismissed = EventDispatcher()

  override func didUpdateReactSubviews() {
    let subChildren = self.reactSubviews()
    props.children = subChildren?.filter { $0 is SheetContentExpoView == false }
    props.sheetContent = subChildren?.filter { $0 is SheetContentExpoView == true }.first
  }
  
  required init(appContext: AppContext? = nil) {
    props = HStackProps(onSheetDismissed: onSheetDismissed)
    let hostingController = UIHostingController(rootView: HStackView(props: props))
    super.init(appContext: appContext)
    setupHostingController(hostingController)
  }
}