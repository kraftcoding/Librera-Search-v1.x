import { Component, OnInit } from '@angular/core';
import { LibreraSearch } from 'src/app/models/LibreraSearch.model';
import { LibreraSearchService } from 'src/app/services/LibreraSearch.service';

@Component({
  selector: 'app-LibreraSearchs-list',
  templateUrl: './LibreraSearch-list.component.html',
  styleUrls: ['./LibreraSearch-list.component.css'],
})
export class LibreraSearchsListComponent implements OnInit {
  LibreraSearchs?: LibreraSearch[];
  currentLibreraSearch: LibreraSearch = {id: '', modified: '', title: ''  };
  currentIndex = -1;
  title = '';

  constructor(private LibreraSearchService: LibreraSearchService) {}

  ngOnInit(): void {
    this.retrieveLibreraSearchs();
  }

  retrieveLibreraSearchs(): void {
    this.LibreraSearchService.getAll().subscribe({
      next: (data) => {
        this.LibreraSearchs = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveLibreraSearchs();
    this.currentLibreraSearch = {id: '', modified: '', title: ''  };
    this.currentIndex = -1;
  }

  setActiveLibreraSearch(LibreraSearch: LibreraSearch, index: number): void {
    this.currentLibreraSearch = LibreraSearch;
    this.currentIndex = index;
  }

  removeAllLibreraSearchs(): void {
    this.LibreraSearchService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentLibreraSearch = {id: '', modified: '', title: ''  };
    this.currentIndex = -1;

    this.LibreraSearchService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.LibreraSearchs = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
