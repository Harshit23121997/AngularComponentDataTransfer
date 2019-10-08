import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    //properties
    @Output() serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();
    @Output() blueprintCreated= new EventEmitter<{serverName:string,serverContent:string}>();
    //endProperties
    newServerName = '';
    newServerContent = '';
    onAddServer(serverNameInput) {
      console.log(serverNameInput)
      this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})
  }
  constructor() { }

  ngOnInit() {
  }

}
