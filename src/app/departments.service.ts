import { Injectable } from '@angular/core';


export interface Department {
  id: number;
  name: string;
  sentence: string;
  overview: string;
  contact: string;
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private departments: Department[];

  constructor() {
    this.departments = [
      {
        id: 1,
        name: 'Angular',
        // tslint:disable-next-line:max-line-length
        sentence: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
        overview: 'Angular is a complete rewrite from the same team that built AngularJS.',
        contact: 'https://angular.io'
      },
      {
        id: 2,
        name: 'Node',
        // tslint:disable-next-line:max-line-length
        sentence: 'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.',
        // tslint:disable-next-line:max-line-length
        overview: 'Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the users web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.',
        contact: 'https://node.js.org'
      },
      {
        id: 3,
        name: 'MongoDB',
        sentence: 'MongoDB is a cross-platform document-oriented database program.',
        // tslint:disable-next-line:max-line-length
        overview: 'Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).',
        contact: 'https://www.mongodb.com'
      },
      {
        id: 4,
        name: 'Ruby',
        sentence: 'Ruby is an interpreted, high-level, general-purpose programming language.',
        // tslint:disable-next-line:max-line-length
        overview: 'Ruby is one of the traditional cardinal gems, together with amethyst, sapphire, emerald, and diamond. The word ruby comes from ruber, Latin for red. The color of a ruby is due to the element chromium.',
        contact: 'https://rubyonrails.com'
      },
      {
        id: 5,
        name: 'Bootstrap',
        sentence: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
        // tslint:disable-next-line:max-line-length
        overview: 'It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.',
        contact: 'https://getbootstrap.com'
      },
    ];
  }

  public getDepartments(): Department[] {
    return this.departments;
  }

  public getDepartment(depId: number): Department {
    for (const d of this.departments) {
      if (d.id === depId) {
        return d;
      }
    }
  }
}
