import {Injectable} from "@angular/core";
import {CognitoUtil} from "./cognito.service";
import {environment} from "../../environments/environment";


//import {Stuff} from "../secure/useractivity/useractivity.component";
import * as AWS from "aws-sdk/global";
import * as DynamoDB from "aws-sdk/clients/dynamodb";

@Injectable()
export class DynomoDbService {

  constructor() { }

}
