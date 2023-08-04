import { useIsOpenContext } from "../utilities/IsOpenContext";

const Overlay = () => {

    const { isBurgerOpen, closeBurgerMenu } = useIsOpenContext();

  return (
    <div 
        style={{
            display: isBurgerOpen ? 'flex' : 'none'
        }}
        onClick={closeBurgerMenu}
        className='overlay'
    >
    </div>
  )
}

export default Overlay