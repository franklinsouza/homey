export function getExpiryCookie(exp:string) {
  if (!exp) {
    return null;
  }

  const now = new Date();
  console.log(now.getTime());
  console.log(parseInt(exp));

  if(now.getTime() > parseInt(exp)) {
    //console.log(now.getTime());
    console.log('Expirado');
    //remove from localstorage
    return null;
  }

  console.log('válido')
  return true;
}