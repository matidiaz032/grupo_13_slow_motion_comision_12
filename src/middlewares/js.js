let algo = () => {
      return setTimeout(() => {
           console.log('primero');
      }, 2000);
}

let func = async () => {
      await algo();
      console.log('segundo')
}