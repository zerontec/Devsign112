import { TestBed } from '@angular/core/testing';

import { DataPaginaService } from './data-pagina.service';

describe('DataPaginaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPaginaService = TestBed.get(DataPaginaService);
    expect(service).toBeTruthy();
  });
});
