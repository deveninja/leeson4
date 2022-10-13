
function Guard({children, auth}) {
  // ACL controller
  if(!auth) {
    return <></>
  }

  return (
    <>
      {children}
    </>

  )
}

export default Guard