import {useCallback} from 'react'
import { Icon,Button,Drawer, Alert } from 'rsuite'
import { useMediaQuery, useModelState } from '../../misc/custom-hooks'
import Dashboard from '.'
import { auth } from '../../misc/firebase'
const DashboardToggle = () => {
    const {isOpen,close,open}=useModelState()
    const isMoboile= useMediaQuery('(max-width:992px)')
    const onSignOut=useCallback(()=>{
        auth.signOut()  ;
        Alert.info('Signed out',4000) 
        close()
    },[close])
    return (
        <>
            <Button block  color="blue" onClick={open}>
                <Icon icon="dashboard"/>Dashboard 
            </Button>
            <Drawer full={isMoboile} show={isOpen} onHide={close} placement="left">
                <Dashboard onSignOut={onSignOut}/>
            </Drawer>
        </>
    )
}

export default DashboardToggle
