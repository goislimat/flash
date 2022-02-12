import styled from "styled-components";
import Title from "./Title";

const InfoContainer = styled.div`
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 8px;
  margin-bottom: 8px;

  &:last-of-type {
    border: none;
    margin-bottom: 32px;
  }

  * {
    display: block;
    font-style: normal;
  }

  span {
    font-size: 12px;
    line-height: 18px;
    color: #787982;
  }

  em {
    font-size: 16px;
    line-height: 24px;
    color: #23263b;
  }
`;

const ProtectedTag = styled.div`
  text-align: center;
  background: #e4e4e4;
  padding: 8px;
  margin-bottom: 32px;

  * {
    font-style: normal;
    display: block;
  }

  strong {
    font-size: 12px;
    line-height: 21px;
    color: #68a462;
  }

  em {
    font-size: 12px;
    line-height: 21px;
    color: #787982;
  }
`;

const Button = styled.button`
  display: block;
  text-align: center;
  background: #ff678e;
  color: white;
  padding: 16px;
  border-radius: 4px;
  width: 100%;
  border: none;
  margin-bottom: 32px;
  text-transform: uppercase;
  font-weight: bold;
`;

interface ProtectedProps {
  vehicle: {
    vehicle: string;
    licensePlate?: string;
    year?: string;
    manufacturer?: string;
    expireIn?: number;
    inspectionState?: string;
  };
}

const getRemaingDaysForCoverage = (days: number) => {
  switch (days) {
    case 1:
      return "Pré-aprovação expira hoje";
    case 2:
      return "Pré-aprovação expira amanhã";
    default:
      return `Pré-aprovação expira em ${days} dias`;
  }
};

const getInspectionAction = (state: string) => {
  switch (state) {
    case "waiting":
      return (
        <Button onClick={() => alert("Faz a vistoria como multimarca")}>
          Fazer vistoria
        </Button>
      );
    case "done":
      return <span>Vistoria finalizada</span>;
    default:
      return null;
  }
};

const ProtectedVehicle = ({ vehicle }: ProtectedProps) => {
  return (
    <div>
      <Title>{vehicle.vehicle}</Title>

      <div>
        <InfoContainer>
          <span>Placa</span>
          <em>{vehicle.licensePlate}</em>
        </InfoContainer>
        <InfoContainer>
          <span>Ano do modelo</span>
          <em>{vehicle.year}</em>
        </InfoContainer>
        <InfoContainer>
          <span>Fabricante</span>
          <em>{vehicle.manufacturer}</em>
        </InfoContainer>
      </div>

      <ProtectedTag>
        <strong>Veículo coberto</strong>
        <em>{getRemaingDaysForCoverage(vehicle.expireIn || 0)}</em>
      </ProtectedTag>

      {getInspectionAction(vehicle.inspectionState || "waiting")}
    </div>
  );
};

export default ProtectedVehicle;
