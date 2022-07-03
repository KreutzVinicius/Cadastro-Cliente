import { useEffect } from "react";
import { StepsContext,steps } from "../../store/StepsContext";
import { CreateClient } from '../CreateClient';
import { CreatePersonal } from '../CreatePersonal';
import { CreateAddress } from "../CreateAddress";
import { RegistrationDone } from "../RegistrationDone";

interface ModalContentProps {
    onReopenNewTaskModal: () => Promise<void>;
    onRequestClose: () => void;
    }

export function ModalContent({ onReopenNewTaskModal,onRequestClose }: ModalContentProps){

    useEffect(() => { checkSteps(steps)}, [steps.isStep1Complete,steps.isStep2Complete, steps.isStep3Complete]);

    function checkSteps(Steps: { isStep1Complete: boolean; isStep2Complete: boolean; isStep3Complete: boolean; }){
        if (Steps.isStep3Complete){
            return <RegistrationDone
            onRequestClose={onRequestClose}/>
        }else {
            if (Steps.isStep2Complete){
                return <CreateAddress
                onReopenNewTaskModal={onReopenNewTaskModal}/>
             }else{
                 if (Steps.isStep1Complete){
                     return <CreatePersonal
            onReopenNewTaskModal={onReopenNewTaskModal}/>
                 }else{
                     return <CreateClient
            onReopenNewTaskModal={onReopenNewTaskModal}/>
                 }
             }
        }
    }


    return(
     <div>
        <StepsContext.Consumer>
            {({steps})=>(
                checkSteps(steps)
            )}

        </StepsContext.Consumer>
     </div>
    )
}