
class IncrementAction extends Action {
 
  constructor(){
    super();
    this.type = this.type + ".stonks.inc";
  }

  onConnected(jsn) {
    super.onConnected(jsn)
  }

  onKeyDown(jsn) {
    // Overriding:
    // Needed to skip the automatic registration to main.lastPressed
  }

  onKeyUp(jsn) {
    if( lastPressed == '' ) return
    var context = contextList[lastPressed]
    $SD.emit(context.action + ".onIncrement", context);
  }

}