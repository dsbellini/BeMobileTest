export interface IUsuario {
  id: number,
  email: string,
  senha: string,
  createdAt: Date,
  updatedAt: Date,
};

export interface ICustomer {
  id: number,
  nome: string,
  cpf: number,
  createdAt: Date,
  updatedAt: Date,
};

export interface IAdress {
  id: number,
  rua: string,
  numero: number,
  bairro: string,
  cidade: string,
  estado: string,
  cep: number,
  complemento: string,
  createdAt: Date,
  updatedAt: Date,
};

export interface IPhoneNumber {
  id: number,
  clienteId: number,
  numero: number,
  createdAt: Date,
  updatedAt: Date,
}

export interface IProduct {
  id: number,
  nome: string,
  descricao: string,
  preco: number,
  createdAt: Date,
  updatedAt: Date,
}

export interface ISell {
  id: number;
  clienteId: number;
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
  precoTotal: number;
  dataHora: Date;
  createdAt: Date;
  updatedAt: Date;
}