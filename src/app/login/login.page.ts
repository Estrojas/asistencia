import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userlist: User[] =[
    new User(1,
              "2859709-6",
              "sem.elit@icloud.com",
              "Aspen",
              "James",
              "Admin",
              true,
              "07 43 64 59 64",
              "525-2144 Accumsan Street"),
    new User(2,
              "4095455-4",
              "curabitur.consequat@aol.ca",
              "Claudia",
              "Kirk",
              "Admin",
              true,
              "07 75 68 65 88",
              "Ap #123-1289 Lacus. Av."),
    new User(3,
              "38662366-K",
              "vulputate.lacus.cras@hotmail.net",
              "Autumn",
              "Schwartz",
              "trabajador",
              true,
              "05 12 82 47 94",
              "319-6447 Diam. Road"),  
    new User(4,
            "32318137-3",
            "magna.ut@google.couk",
            "Fredericka",
            "Peck",
            "trabajador",
            true,
            "04 49 08 12 31",
            "802-7475 Porta Ave"),
    new User(5,
            "15314713-2",
            "laoreet.lectus.quis@hotmail.net",
            "Destiny",
            "Hall",
            "trabajador",
            false,
            "06 77 50 67 28",
            "879-3478 Tellus Rd."),
    new User(6,
            "3957260-5",
            "lacus@aol.couk",
            "Cora",
            "Hale",
            "trabajador",
            false,
            "03 12 01 43 77",
            "P.O. Box 686, 2113 Natoque St."),

    new User(7,
            "22556322-5",
            "vitae.risus@google.org",
            "Xander",
            "Vazquez",
            "trabajador",
            true,
            "07 93 36 36 50",
            "P.O. Box 905, 1113 Tempor Rd."),     
  ]
  constructor() { }

  ngOnInit() {
  }

}
