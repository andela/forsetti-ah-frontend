import profileReducer from '../../reducers/profileReducers';
import  { getCurrentProfile } from '../../actions/profileActions';

const initialState = {
    profile: {},
    loading: false,
};

const loadingState = {
    profile: {},
    loading: true,
};

const profile =  {data : {
    articlesRead: "You have read 1 article(s).",
    articlesReadList: [],
    articlesWritten: "2 articles written.",
    articlesWrittenList: [],
    bio: "I am",
    firstname: "gj",
    followers: "You have 0 followers.",
    image: "https://res.cloudinary.com/forsetti/image/upload/v1557757972/forsetti/fxv4zhlflmqv0ao9tlna.png",
    lastname: "Abosede",
    username: "Melanie"
 }
};

const auth = {
    userObject: {
      id:'ffffabd5-4a5b-45eb-8247-ba47a978070e'
    }
  };
  
const Params = {params: {
    params: {
      id: 'ffffabd5-4a5b-45eb-8247-ba47a978070e'
    }
  }
  };

describe('userProfileReducer', () => {
test('return default route', () => {
const reducer = profileReducer(undefined, {type: '@@INIT'});

expect(reducer).toEqual(initialState);
});

test('should handle PROFILE_LOADING action', () => {
    const reducer = profileReducer(undefined, {type: 'PROFILE_LOADING'});
    
    expect(reducer).toEqual(loadingState);
});

it('should handle GET_PROFILE action', () => {
    const state = profileReducer(initialState, {
        type: 'GET_PROFILE',
        payload: {data: profile},
        loading: false,
    });
    expect(state).toEqual(
        { profile:
            { data:
               { articlesRead: 'You have read 1 article(s).',
                 articlesReadList: [],
                 articlesWritten: '2 articles written.',
                 articlesWrittenList: [],
                 bio: 'I am',
                 firstname: 'gj',
                 followers: 'You have 0 followers.',
                 image:
                  'https://res.cloudinary.com/forsetti/image/upload/v1557757972/forsetti/fxv4zhlflmqv0ao9tlna.png',
                 lastname: 'Abosede',
                 username: 'Melanie' } },
           loading: false }
    );
});
})
