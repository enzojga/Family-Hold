import { CustomForm, GrayContainer } from "../generics/generics";
export default function CreateCategorie() {
    return (
        <GrayContainer style={{textAlign:'initial', justifyContent: 'start'}}>
            <CustomForm>
            <label>Nome da tarefa</label>
        	    <input
                    type="text"
                    name="text"
                    placeholder="Digite o nome da tarefa"
                />
                <button>
                    <span>Criar categoria</span>
                </button>
            </CustomForm>
        </GrayContainer>
    );
}

