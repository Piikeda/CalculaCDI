import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'CalculaCDI';

  ngOnInit() {
    this.limpar();    
  }
  limpar(): void {
    
  }
  calcula(): void {
    
    let vlrInves = 0;
    if((document.getElementById("Vlr_Investido") as HTMLSelectElement).value!=undefined &&
       (document.getElementById("Vlr_Investido") as HTMLSelectElement).value!="" )
      {
        vlrInves = parseFloat((document.getElementById("Vlr_Investido") as HTMLSelectElement).value);
      }else{
        alert("Preencha valor investido.");
        (document.getElementById("Vlr_Investido") as HTMLSelectElement).focus();
        return;
      }
    
    var Cdi  = 0
    if((document.getElementById("Vlr_Cdi_Atual") as HTMLSelectElement).value!=undefined &&
       (document.getElementById("Vlr_Cdi_Atual") as HTMLSelectElement).value!="" )
    {
      Cdi = parseFloat((document.getElementById("Vlr_Cdi_Atual") as HTMLSelectElement).value);
    }else{
      alert("Preencha CDI.");
      (document.getElementById("Vlr_Cdi_Atual") as HTMLSelectElement).focus();
      return;
    }
    
    var Perc = 0;
    if((document.getElementById("Vlr_Perc_Rendimento") as HTMLSelectElement).value!=undefined &&
       (document.getElementById("Vlr_Perc_Rendimento") as HTMLSelectElement).value!="" ){
      Perc = parseFloat((document.getElementById("Vlr_Perc_Rendimento") as HTMLSelectElement).value) / 100;
    }else{
      alert("Preencha Percentual de Rendimento.");
      (document.getElementById("Vlr_Perc_Rendimento") as HTMLSelectElement).focus();
      return;
    }

    var Calc = Perc * Cdi;
    
    var Calc2 = Calc/100;
    var VlrFIm = vlrInves * Calc2;                               
    var VlrRendimentoFinal = vlrInves + VlrFIm;

    (document.getElementById("Vlr_Resultado_Rendimento") as HTMLSelectElement).value = VlrFIm.toFixed(2).toString();
    (document.getElementById("Vlr_Total_Rendimento") as HTMLSelectElement).value = Math.round(VlrRendimentoFinal).toFixed(2);    
   
  }
}
