import { Button, ButtonContainer } from "../Common/Button";
import { Input } from "../Common/Input";
import { LabelInput } from "../Common/Label";
import { ContactContainer, ContactFlexContainer } from "./ContactPageStyles";

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactFlexContainer>
        <ContactContainer>
          <LabelInput>CEP</LabelInput>
          <Input placeholder="Digite" marginRight="20px" />
        </ContactContainer>
        <ContactContainer>
          <LabelInput>Cidade</LabelInput>
          <Input placeholder="Digite" marginRight="20px" />
        </ContactContainer>
        <ContactContainer>
          <LabelInput>UF</LabelInput>
          <Input placeholder="Digite" />
        </ContactContainer>
      </ContactFlexContainer>

      <ContactFlexContainer>
        <ContactContainer>
          <LabelInput>Endereço</LabelInput>
          <Input placeholder="Digite" marginRight="20px" />
        </ContactContainer>
        <ContactContainer>
          <LabelInput>Número</LabelInput>
          <Input placeholder="Digite" marginRight="20px" />
        </ContactContainer>
        <ContactContainer>
          <LabelInput>Bairro</LabelInput>
          <Input placeholder="Digite" />
        </ContactContainer>
      </ContactFlexContainer>

      <ContactContainer>
        <LabelInput>Complemento</LabelInput>
        <Input placeholder="Digite" />
      </ContactContainer>

      <ButtonContainer>
        <Button padding="10px 40px" marginTop="30px">
          Salvar
        </Button>
      </ButtonContainer>
    </ContactContainer>
  );
};

export default ContactPage;
