import { IPhoneNumber } from '../Interfaces/interfaces';
import SequelizePhone from '../database/models/SequelizePhone';

export default class PhoneModel {
  private model = SequelizePhone;

  public async newPhone(phone: IPhoneNumber): Promise<IPhoneNumber> {
    const newPhone = await this.model.create(phone);
    return newPhone.dataValues;
  }

  public async findPhone(phone: IPhoneNumber): Promise<IPhoneNumber | null> {
    const findPhone = await this.model.findOne({ where: {numero: phone.numero} });
    if (!findPhone) {
      return null;
    }
    return findPhone.dataValues;
  }

  public async findAllPhones(): Promise<IPhoneNumber[]> {
    const allPhones = await this.model.findAll();
    return allPhones.map(phone => phone.dataValues);
  }

  public async findPhoneById(id: number): Promise<IPhoneNumber | null> {
    const phone = await this.model.findByPk(id);
    if (!phone) {
      return null;
    }
    return phone?.dataValues;
  }

  public async updatePhone(id: number, phone: IPhoneNumber): Promise<IPhoneNumber> {
    await this.model.update(phone, { where: { id } });
    return phone;
  }

  public async deletePhone(id: number): Promise<void> {
    await this.model.destroy({ where: { id } });
  }
};