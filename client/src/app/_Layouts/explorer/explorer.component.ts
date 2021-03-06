import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../_Services/entries.service';
import { Entry } from '../../_Models/Entry';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {

  entries: Entry[];

  constructor(private entryService: EntriesService) {

  }

  ngOnInit() {
    this.entryService.getEntries('explorer').subscribe((entries: any) => {
      this.entries = entries;
    });
  }

  deletedEntry(entry) {
    this.entries = this.entries.filter((i: any) => i.id !== entry);
  }

  initNewEntry(e) {
    this.entries = [e, ...this.entries];
    console.log(e);
  }
}
