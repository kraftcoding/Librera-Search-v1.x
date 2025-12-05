import { Component, OnInit } from '@angular/core';
import { LibreraTextSearch } from 'src/app/models/LibreraTextSearch.model';
import { LibreraSearchService } from 'src/app/services/LibreraSearch.service';

@Component({
  selector: 'app-LibreraTextSearchs-list',
  templateUrl: './LibreraSearch-contents.component.html',
  styleUrls: ['./LibreraSearch-contents.component.css']
})

export class LibreraTextSearchListComponent implements OnInit {
  LibreraTextSearch?: LibreraTextSearch[];
  currentLibreraTextSearch: LibreraTextSearch = {id: '', bookId: '', modified: '', title: '', authors: '', pageNumber: 0, textContent: ''  };
  currentIndex = -1;
  textContent = '';

  constructor(private LibreraSearchService: LibreraSearchService) {}

  ngOnInit(): void {
    //this.retrieveLibreraTextSearchs();
    this.refreshList()
  } 

  setActiveLibreraTextSearch(LibreraTextSearch: LibreraTextSearch, index: number): void {
    this.currentLibreraTextSearch = LibreraTextSearch;
    this.currentIndex = index;
  }

  removeAllLibreraTextSearchs(): void {
    this.LibreraSearchService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

refreshList(): void {
    //this.retrieveLibreraSearchs();
    this.currentLibreraTextSearch = {id: '', modified: '', title: '', bookId: '', authors: '', pageNumber: 0, textContent: ''  };
    this.currentIndex = -1;
  }

  searchByTextContent(): void {
    this.currentLibreraTextSearch = {id: '', modified: '', title: '', bookId: '', authors: '', pageNumber: 0, textContent: ''  };
    this.currentIndex = -1;

    console.log("Searching by text content:", this.textContent);

    this.LibreraSearchService.findByTextContent(this.textContent).subscribe({
      next: (data) => {
        this.LibreraTextSearch = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
