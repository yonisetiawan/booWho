function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool==false || bool==true && typeof(bool)!="number") {
    return true
  }else{
    return false
  }
}

console.log(booWho(1))
