import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LaunchActionTypes, SaveLaunches, SavedLaunches, NotSavedLaunches } from './launch.actions';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Injectable()
export class LaunchEffects {

  @Effect()
  public saveLaunches$ = this.actions$.pipe(ofType(LaunchActionTypes.SaveLaunches),
                                            mergeMap((action: SaveLaunches) =>
                                                      this.api.postLaunch$(action.payload)
                                                      .pipe(
                                                          map (launch => new SavedLaunches(launch)),
                                                              catchError (err => of(new NotSavedLaunches(err.message)))
                                                      )
                                                    )
                                           );

  constructor(private actions$: Actions, private api: ApiService) {}


}
