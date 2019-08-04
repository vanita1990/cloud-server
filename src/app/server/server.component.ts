import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = "offline";
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreatedServer(){
    this.serverCreationStatus="server was created";
  }

  getServerStatus() {
    return this.serverStatus;
  }


  ngOnInit() { }
}
