import { Component } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {
  const pipe = new FileSizePipe();

  describe('Shallow FileSizePipe test', () => {
    @Component({
      template: `
        <p>Size: {{ size | filesize:suffix }}</p>
      `
    })
    class FileSizeTestComponent {
      suffix;
      size = 123456789;
    }

    let fixture: ComponentFixture<FileSizeTestComponent>;
    let el: HTMLElement;
    let component: FileSizeTestComponent;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [FileSizePipe, FileSizeTestComponent]
      });

      fixture = TestBed.createComponent(FileSizeTestComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    it('should convert bytes to megabytes', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain('117.74MB');
      component.size = 2345678;
      fixture.detectChanges();
      expect(el.textContent).toContain('2.24MB');
    });

    it('should use the default extension when not provided', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain('117.74MB');
    });

    it('should override the extension when provided', () => {
      component.suffix = 'myExt';
      fixture.detectChanges();
      expect(el.textContent).toContain('117.74myExt');
    });
  });

  describe('Isolate FileSizePipe test', () => {
    it('should convert bytes to megabytes', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should use the default extension when not provided', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should override the extension when provided', () => {
      expect(pipe.transform(123456789, 'myTxt')).toBe('117.74myTxt');
      expect(pipe.transform(987654321, 'exe')).toBe('941.90exe');
    });
  });
});
