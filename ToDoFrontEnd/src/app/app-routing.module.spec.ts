import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';

describe('Router', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: []
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  });

  it('should go to todos when navigate when ""', fakeAsync(() =>{
    // when
    router.navigate([''])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos')
  }));

  it('should go to todos when navigate when "/todos"', fakeAsync(() =>{
    // when
    router.navigate(['/todos'])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos')
  }));

  it('should go to todos/create when navigate when "todos/create"', fakeAsync(() =>{
    // when
    router.navigate(['/todos/create'])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos/create')
  }));

  it('should go to todos/edit/1 when navigate when "todos/edit/1"', fakeAsync(() =>{
    // when
    router.navigate(['/todos/edit',1])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos/edit/1')
  }));

  it('should go to todos/1 when navigate when "todos/1"', fakeAsync(() =>{
    // when
    router.navigate(['/todos',1])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos/1')
  }));
});
