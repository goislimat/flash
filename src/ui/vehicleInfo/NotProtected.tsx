import styled from "styled-components";
import Title from "./Title";

const NotProtectedTag = styled.strong`
  display: block;
  text-align: center;
  width: 100%;
  background: #e4e4e4;
  color: #ff7156;
  padding: 8px;
  margin-top: 32px;
`;

interface NotProtectedProps {
  vehicle: {
    vehicle: string;
    licensePlate: string;
  };
}

const NotProtected = ({ vehicle }: NotProtectedProps) => {
  return (
    <div>
      <Title>{`${vehicle.vehicle} (${vehicle.licensePlate})`}</Title>
      <NotProtectedTag>Veículo não está coberto</NotProtectedTag>
    </div>
  );
};

export default NotProtected;
