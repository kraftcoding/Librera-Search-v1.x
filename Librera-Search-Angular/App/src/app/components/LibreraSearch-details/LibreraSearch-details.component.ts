import { Component, Input, OnInit } from '@angular/core';
import { LibreraSearchService } from 'src/app/services/LibreraSearch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LibreraSearch } from 'src/app/models/LibreraSearch.model';

@Component({
  selector: 'app-LibreraSearch-details',
  templateUrl: './LibreraSearch-details.component.html',
  styleUrls: ['./LibreraSearch-details.component.css'],
})
export class LibreraSearchDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentLibreraSearch: LibreraSearch = {
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

  message = '';

  constructor(
    private LibreraSearchService: LibreraSearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getLibreraSearch(this.route.snapshot.params['id']);
    }
  }

  getLibreraSearch(id: string): void {
    this.LibreraSearchService.get(id).subscribe({
      next: (data) => {
        this.currentLibreraSearch = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updatePublished(status: boolean): void {
    const data = {   
      id : this.currentLibreraSearch.id,
      modified :  this.currentLibreraSearch.modified,
      Title :  this.currentLibreraSearch.title,
      Authors:  this.currentLibreraSearch.authors,
      Series:  this.currentLibreraSearch.series,
      Ids:  this.currentLibreraSearch.ids,
      Published:  this.currentLibreraSearch.published,
      Publisher:  this.currentLibreraSearch.publisher,
      Languages:  this.currentLibreraSearch.languages,
      Tags:  this.currentLibreraSearch.tags,
      Formats:  this.currentLibreraSearch.formats,
      Path:  this.currentLibreraSearch.path
    };

    this.message = '';

    this.LibreraSearchService.update(this.currentLibreraSearch.id, data).subscribe({
      next: (res) => {
        console.log(res);
        //this.currentLibreraSearch.published = status;
        this.message = res.message
          ? res.message
          : 'The register was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateLibreraSearch(): void {
    this.message = '';

    this.LibreraSearchService
      .update(this.currentLibreraSearch.id, this.currentLibreraSearch)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This LibreraSearch was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteLibreraSearch(): void {
    this.LibreraSearchService.delete(this.currentLibreraSearch.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/LibreraSearchs']);
      },
      error: (e) => console.error(e)
    });
  }
}
