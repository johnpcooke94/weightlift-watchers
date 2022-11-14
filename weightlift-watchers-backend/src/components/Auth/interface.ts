import { IUserModel } from '../User/model';

/**
 * @export
 * @interaface IAuthService
 */
export interface IAuthService {
    /**
     * @param {IUserModel} userModel
     * @returns {Promise<IUserModel>}
     * @memberof AuthService
     */
    createUser(userModel: IUserModel): Promise < IUserModel > ;
}
