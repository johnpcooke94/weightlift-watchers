/*
 TODO: right now I think redux is probably overkill, but maybe later there could be a need to use it, for now I'm just
 gonna stick with a simple singleton implementation, should do the trick
 */

import {User} from '../types/User';
import {Exercise} from '../types/Exercise';

export class WebState {

    private static instance: WebState;

    public user: User | undefined;
    public exercises: Exercise[] | undefined;

    private constructor() {
    }

    public static getInstance(): WebState {
        if (!WebState.instance) {
            WebState.instance = new WebState();
        }

        return WebState.instance;
    }


}
