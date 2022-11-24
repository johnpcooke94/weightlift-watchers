import * as bcrypt from 'bcrypt';
import {Document, Schema} from 'mongoose';
import {NextFunction} from 'express';
import * as connections from '../../config/connection/connection';
import {IExerciseModel} from '../Exercise/model';

export type AuthToken = {
    accessToken: string,
    kind: string,
};

/**
 * @export
 * @interface IUserModel
 * @extends {Document}
 */
export interface IUserModel extends Document {
    username: string;
    password: string;

    exercises: IExerciseModel[];

    comparePassword: (password: string) => Promise < boolean > ;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
 *        - email
 *        - name
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        passwordResetToken:
 *          type: string
 *        passwordResetExpires:
 *          type: string
 *          format: date
 *        tokens:
 *          type: array
 *    Users:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/UserSchema'
 */
const UserSchema: Schema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
    },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,
    tokens: Array,
}, {
    collection: 'usermodel',
    versionKey: false,
}).pre('save', async function (next: NextFunction): Promise < void > {
    const user: IUserModel = this; // tslint:disable-line

    if (!user.isModified('password')) {
        return next();
    }

    try {
        const salt: string = await bcrypt.genSalt(10);

        const hash: string = await bcrypt.hash(user.password, salt);

        user.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});

/**
 * Method for comparing passwords
 */
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise < boolean > {
    try {
        const match: boolean = await bcrypt.compare(candidatePassword, this.password);

        return match;
    } catch (error) {
        return error;
    }
};

export default connections.db.model< IUserModel >('UserModel', UserSchema);
