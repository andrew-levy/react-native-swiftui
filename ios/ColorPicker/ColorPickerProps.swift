import SwiftUI
import ExpoModulesCore

class ColorPickerProps: ObservableObject {
  @Published var label: String = ""
  @Published var selection: UIColor = .white
  @Published var modifiers: [[String: Any]] = []
  @Published var supportsOpacity = true
  @Published var onValueChange: EventDispatcher
  init(onValueChange: EventDispatcher) {
    self.onValueChange = onValueChange
  }
}
