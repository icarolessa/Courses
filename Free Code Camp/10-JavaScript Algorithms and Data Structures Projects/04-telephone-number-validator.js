function telephoneCheck(str) {
    const exp = /^1?( )?(\(\d{3}\)|\d{3})( )?(-)?( )?\d{3}( )?(-)?( )?\d{4}$/.test(str)
    
    if(exp){
        return true
    } else {
        return false
    }
}

telephoneCheck("555-555-5555");