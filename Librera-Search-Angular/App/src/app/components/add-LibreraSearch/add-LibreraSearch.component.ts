import { Component } from '@angular/core';
import { LibreraSearch } from 'src/app/models/LibreraSearch.model';
import { LibreraSearchService } from 'src/app/services/LibreraSearch.service';

@Component({
  selector: 'app-add-LibreraSearch',
  templateUrl: './add-LibreraSearch.component.html',
  styleUrls: ['./add-LibreraSearch.component.css'],
})

export class AddLibreraSearchComponent {
  LibreraSearch: LibreraSearch = {
    id : '',
    modified :  '',
    title :  '',
    authors:  '',
    series:  0,
    ids:  '',
    published:  new Date(),
    publisher:  '',
    languages:  '',
    tags:  '',
    formats:  '',
    path:  ''
  };
  submitted = false;

  constructor(private LibreraSearchService: LibreraSearchService) {}

  saveLibreraSearch(): void {
    const data = {
        //id : this.LibreraSearch.id,
        modified :  this.LibreraSearch.modified,
        Title :  this.LibreraSearch.title,
        Authors:  this.LibreraSearch.authors,
        Series:  this.LibreraSearch.series,
        Ids:  this.LibreraSearch.ids,
        Published:  this.LibreraSearch.published,
        Publisher:  this.LibreraSearch.publisher,
        Languages:  this.LibreraSearch.languages,
        Tags:  this.LibreraSearch.tags,
        Formats:  this.LibreraSearch.formats,
        Path:  this.LibreraSearch.path
    };

    this.LibreraSearchService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newLibreraSearch(): void {
    this.submitted = false;
    this.LibreraSearch = {
      id : '',
      modified :  '',
      title :  '',
      authors:  '',
      series:  0,
      ids:  '',
      published:  new Date(),
      publisher:  '',
      languages:  '',
      tags:  '',
      formats:  '',
      path:  ''
    };
  }
}
