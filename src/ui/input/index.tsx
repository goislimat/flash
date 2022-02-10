import styled from "styled-components";

const InputContainer = styled.div`
  margin-bottom: 24px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  text-transform: capitalize;
  font-size: 12px;
  line-height: 18px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  background-color: white;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 8px;
`;

interface InputProps {
  name: string;
  label: string;
  value: string;
  password?: true;
}

const Input = ({ name, label, value, password }: InputProps) => {
  return (
    <InputContainer>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <StyledInput
        id={name}
        name={name}
        type={password ? "password" : "text"}
        value={value}
        disabled
      />
    </InputContainer>
  );
};

export default Input;
