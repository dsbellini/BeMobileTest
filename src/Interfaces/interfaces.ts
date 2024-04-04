export interface IUsuario {
  id?: number,
  email: string,
  senha: string,
};

export interface ICustomer {
  id?: number,
  nome: string,
  cpf: number,
};

export interface IAddress {
  id?: number,
  clienteId: number,
  rua: string,
  numero: number,
  bairro: string,
  cidade: string,
  estado: string,
  cep: number,
  complemento: string,
};

export interface IPhoneNumber {
  id?: number,
  clienteId: number,
  numero: number,
}

export interface IProduct {
  id?: number,
  nome: string,
  descricao: string,
  preco: number,
  excluido?: boolean,
}

export interface ISell {
  id?: number;
  clienteId: number;
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
  precoTotal: number;
  dataHora: Date;
}