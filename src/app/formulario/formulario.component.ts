import { Component, OnInit,  ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from './CustomValidators';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FornularioComponent implements OnInit {

  mensagem: string;
  test: string;

  private ativarUsuarioForm: FormGroup;
  private email: string;
  url: string;
  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) {
    this.test = 'Starting TEST...';

    setTimeout(() => {
      this.test = 'detectChanges-do-not-work';
      this.cd.detectChanges();
    }, 1000);

    setTimeout(() => {
      this.test = 'markForCheck-works!';
      this.cd.markForCheck();
    }, 2000);

  }

  updateItem(): void {
      this.cd.detectChanges();
  }

  ngOnInit() {
    this.validarForms();
    this.url = 'http://localhost:53954/api/tutorial/GetAll';
  }

  isInvalid(field: string, validate: string) {
      const fieldControl = this.ativarUsuarioForm.controls[field];
      return (fieldControl.touched) && (this.ativarUsuarioForm.hasError(validate)
          || ((validate) ? (fieldControl.hasError(validate)) : fieldControl.invalid));
  }

  private validarForms() {
      this.ativarUsuarioForm = this.formBuilder.group({
          email: ['', [CustomValidators.required, Validators.required]]
      });
  }

  private ativarUsuario() {
      if (this.ativarUsuarioForm.valid) {
        this.mensagem = 'Ok Validou';
      } else {
        this.mensagem = 'Não Validou';
      }
  }

  isHabilitarPeriodo() {
      this.ativarUsuarioForm.get('email').disable();
  }
}
