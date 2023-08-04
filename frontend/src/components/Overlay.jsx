import { useIsOpenContext } from "../utilities/IsOpenContext";

const Overlay = () => {

    const { isBurgerOpen, closeBurgerMenu } = useIsOpenContext();

    console.log(isBurgerOpen)

  return (
    <div 
        style={{
            position: 'fixed', 
            width: '100%', 
            height: '100vh', 
            backgroundColor: 'black',
            opacity: 0.5,
            display: isBurgerOpen ? 'flex' : 'none'
        }}
        onClick={closeBurgerMenu}
    >
    </div>
  )
}

export default Overlay