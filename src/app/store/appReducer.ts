import {regionStore} from '../model/regions-model';

export interface AppState {
    //regionInitialData: regions[];
    //regionInitialData: regions[];
   // regionsData: regions;
  }

const initialState: AppState = {
    // regionInitialData: regions[] = [
    //     {'Asia', 'asia'},{'Europe', 'europe'}
    // ],
    //regions:  regionsModel[] =[{'Asia', 'asia'},{'Europe', 'europe'}]
   // regions: [{'Asia', 'asia'},{'Europe', 'europe'}]
  // regionInitialData: [new regions('Apples', 5), new regions('Tomatoes', 10)]
    // ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
    // var arr: MyType[] = [
    //     { "id": 0, "name": "Available" },
    //     { "id": 1, "name": "Ready" },
    //     { "id": 2, "name": "Started" }
    // ];
   // regions: [{'name':'Asia', 'value':'asia'}, {'name':'Europe','value': 'europe'}],
//    regions : [
//       {value: 'asia', name: 'Asia'},
//       {value: 'europe', name: 'Europe'}
//     ]

  };
  export function appReducer(state: AppState = initialState, action: any){

    if (state == null) state = [];

    switch (action.type) {
        case 'LOAD_REGIONS':
            return action.payload;
        default:
            return state;
    }
   
  }