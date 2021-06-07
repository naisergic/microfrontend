const InjectScript = (id, src, loadOnce = true, callback, async, defer) => {
    const makeACallBack = () => {
      if (typeof callback === 'function') {
        callback()
      }
    }
  
    const existingScript = document.getElementById(id)
  
    if (existingScript && loadOnce) {
      makeACallBack()
      return null
    }
    const script = document.createElement('script')
    script.src = src
    script.id = id
    script.async = async
    script.defer = defer
    document.body.appendChild(script)
    script.onload = () => {
      makeACallBack()
    }
    return null
  }
  
  export default InjectScript
  