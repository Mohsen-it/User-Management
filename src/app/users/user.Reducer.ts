import { createAction, createReducer, on } from '@ngrx/store';

export const ShowImage = createAction('[User] hide and show Image');
export const imageReducer = createReducer(
    { hideAndShowImage: false },
    on((ShowImage), state =>
         {console.log('state : ',state)
        return{ 
            ...state,
            hideAndShowImage: !state.hideAndShowImage}
         }
)
)