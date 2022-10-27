import { TestBed } from '@angular/core/testing';

import { PrepBoardService } from './prep-board.service';

describe('PrepBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrepBoardService = TestBed.get(PrepBoardService);
    expect(service).toBeTruthy();
  });
});
