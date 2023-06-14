
function confirmarCruzadinha(){
    var cs_c = (linha1_cs_c.value);
    var cs_s = (linha1_cs_s.value);

    var cpu_c = linha1_cpu_c.value;
    var cpu_p = linha1_cpu_p.value;
    var cpu_u = linha1_cpu_u.value;

    var cache_c = linha1_cs_c.value;
    var cache_a = linha2_cache_a.value;
    var cache_c = linha3_cache_c.value;
    var cache_h = linha4_cache_h.value;
    var cache_e = linha5_cache_e.value;

    var ula_u = linha1_cpu_u.value;
    var ula_l = linha2_ula_l.value;
    var ula_a = linha3_ram_a.value;

    var quadcore_q = linha4_quadcore_q.value;
    var quadcore_u = linha4_quadcore_u.value;
    var quadcore_a = linha4_quadcore_a.value;
    var quadcore_d = linha4_quadcore_d.value;
    var quadcore_c = linha4_quadcore_c.value;
    var quadcore_o = linha4_quadcore_o.value;
    var quadcore_r = linha4_quadcore_r.value;
    var quadcore_e = linha4_quadcore_e.value;

    var regis_r = linha3_regis_r.value;
    var regis_e = linha4_quadcore_e.value;
    var regis_g = linha5_regis_g.value;
    var regis_i = linha6_regis_i.value;
    var regis_s = linha7_regis_s.value;
    var regis_t = linha8_regis_t.value;
    var regis_r2 = linha9_regis_r2.value;
    var regis_a = linha10_regis_a.value;
    var regis_d = linha11_regis_d.value;
    var regis_o = linha12_regis_o.value;
    var regis_r3 = linha13_regis_r3.value;
    var regis_e2 = linha14_regis_e2.value;
    var regis_s2 = linha15_regis_s2.value;

    var eprom_e = linha5_cache_e.value;
    var eprom_p = linha5_eprom_p.value;
    var eprom_r = linha5_eprom_r.value;
    var eprom_o = linha5_eprom_o.value;
    var eprom_m = linha5_eprom_m.value;

    var dma_d = linha2_dma_d.value;
    var dma_m = linha3_ram_m.value;
    var dma_a = linha4_dma_a.value;

    var ram_r = linha3_ram_r.value;
    var ram_a = linha3_ram_a.value;
    var ram_m = linha3_ram_m.value;

    var rom_r = linha3_ram_r.value;
    var rom_o = linha4_rom_o.value;
    var rom_m = linha5_eprom_m.value;

    var threads_t = linha3_threads_t.value;
    var threads_h = linha4_threads_h.value;
    var threads_r = linha5_eprom_r.value;
    var threads_e = linha6_threads_e.value;
    var threads_a = linha7_threads_a.value;
    var threads_d = linha8_threads_d.value;
    var threads_s = linha9_threads_s.value;

    var memo_m = linha12_memoriademassa_m.value;
    var memo_e = linha12_memoriademassa_e.value;
    var memo_m2 = linha12_memoriademassa_m2.value;
    var memo_o = linha12_memoriademassa_o.value;
    var memo_r = linha12_memoriademassa_r.value;
    var memo_i = linha12_memoriademassa_i.value;
    var memo_a = linha12_memoriademassa_a.value;
    var memo_d = linha12_memoriademassa_d.value;
    var memo_e2 = linha12_memoriademassa_e2.value;
    var memo_m3 = linha12_memoriademassa_m3.value;
    var memo_a2 = linha12_memoriademassa_a2.value;
    var memo_s = linha12_memoriademassa_s.value;
    var memo_s2 = linha12_memoriademassa_s2.value;
    var memo_a3 = linha12_memoriademassa_a3.value;

    var flash_f = linha9_flash_f.value;
    var flash_l = linha9_flash_l.value;
    var flash_a = linha9_flash_a.value;
    var flash_s = linha9_flash_s.value;
    var flash_h = linha9_flash_h.value;

    var i5_i = linha6_regis_i.value;
    var i5_5 = linha6_i5_5.value;

    var i7_i = linha12_memoriademassa_i.value; 
    var i7_7 = linha13_i7_7.value;

    var dualcore_d = linha8_threads_d.value;
    var dualcore_u = linha8_dualcore_u.value;
    var dualcore_a = linha8_dualcore_a.value;
    var dualcore_l = linha8_dualcore_l.value;
    var dualcore_c = linha8_dualcore_c.value;
    var dualcore_o = linha8_dualcore_o.value;
    var dualcore_r = linha8_dualcore_r.value;
    var dualcore_e = linha8_dualcore_e.value;

    var databus_d = linha10_databus_d.value;
    var databus_a = linha10_databus_a.value;
    var databus_t = linha10_databus_t.value;
    var databus_a2 = linha10_databus_a2.value;
    var databus_b = linha10_databus_b.value;
    var databus_u = linha10_databus_u.value;
    var databus_s = linha10_databus_s.value;

    var addbus_a = linha3_addressbus_a.value;
    var addbus_d = linha4_quadcore_d.value;
    var addbus_d2 = linha5_addressbus_d.value;
    var addbus_r = linha6_addressbus_r.value;
    var addbus_e = linha7_addressbus_e.value;
    var addbus_s = linha8_addressbus_s.value;
    var addbus_s2 = linha9_flash_s.value;
    var addbus_b = linha10_databus_b.value;
    var addbus_u = linha11_addressbus_u.value;
    var addbus_s3 = linha12_memoriademassa_s.value;

    if((addbus_a + addbus_d + addbus_d2 + addbus_r + addbus_e + addbus_s + addbus_s2 + addbus_b + addbus_u + addbus_s3).toUpperCase() == 'ADDRESSBUS'){
        var addressColor = [
            document.querySelector('#linha3_addressbus_a'),
            document.querySelector('#linha4_quadcore_d'),
            document.querySelector('#linha5_addressbus_d'),
            document.querySelector('#linha6_addressbus_r'),
            document.querySelector('#linha7_addressbus_e'),
            document.querySelector('#linha8_addressbus_s'),
            document.querySelector('#linha9_flash_s'),
            document.querySelector('#linha10_databus_b'),
            document.querySelector('#linha11_addressbus_u'),
            document.querySelector('#linha12_memoriademassa_s')
        ];
        
        for (let i = 0; i < addressColor.length; i++) {
            const idAtual = addressColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }

    if((cs_c + cs_s).toUpperCase() == 'CS'){
        var csColor = [
            document.querySelector('#linha1_cs_c'),
            document.querySelector('#linha1_cs_s')
        ];
        
        for (let i = 0; i < csColor.length; i++) {
            const idAtual = csColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }

    if((cs_c + cache_a + cache_c + cache_h + cache_e).toUpperCase() == 'CACHE'){
        var cacheColor = [
            document.querySelector('#linha1_cs_c'),
            document.querySelector('#linha2_cache_a'),
            document.querySelector('#linha3_cache_c'),
            document.querySelector('#linha4_cache_h'),
            document.querySelector('#linha5_cache_e')
        ];
        
        for (let i = 0; i < cacheColor.length; i++) {
            const idAtual = cacheColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }

    if((cpu_c + cpu_p + cpu_u).toUpperCase() == 'CPU'){
        var cpuColor = [
            document.querySelector('#linha1_cpu_c'),
            document.querySelector('#linha1_cpu_p'),
            document.querySelector('#linha1_cpu_u')
        ];
        
        for (let i = 0; i < cpuColor.length; i++) {
            const idAtual = cpuColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }

    if((ula_u + ula_l + ula_a).toUpperCase() == 'ULA'){
        var ulaColor = [
            document.querySelector('#linha1_cpu_u'),
            document.querySelector('#linha2_ula_l'),
            document.querySelector('#linha3_ram_a')
        ];
        
        for (let i = 0; i < ulaColor.length; i++) {
            const idAtual = ulaColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }

    if((regis_r + regis_e + regis_g + regis_i + regis_s + regis_t + regis_r2 + regis_a + regis_d + regis_o + regis_r3 + regis_e2 + regis_s2).toUpperCase() == 'REGISTRADORES'){
        var regisColor = [
            document.querySelector('#linha3_regis_r'),
            document.querySelector('#linha4_quadcore_e'),
            document.querySelector('#linha5_regis_g'),
            document.querySelector('#linha6_regis_i'),
            document.querySelector('#linha7_regis_s'),
            document.querySelector('#linha8_regis_t'),
            document.querySelector('#linha9_regis_r2'),
            document.querySelector('#linha10_regis_a'),
            document.querySelector('#linha11_regis_d'),
            document.querySelector('#linha12_regis_o'),
            document.querySelector('#linha13_regis_r3'),
            document.querySelector('#linha14_regis_e2'),
            document.querySelector('#linha15_regis_s2')
        ];
        
        for (let i = 0; i < regisColor.length; i++) {
            const idAtual = regisColor[i];
            
            regisColor[i].classList.add('correto')
            idAtual.disabled = true;
        }
    }

    if((eprom_e + eprom_p + eprom_r + eprom_o + eprom_m).toUpperCase() == 'EPROM'){
        var epromColor = [
            document.querySelector('#linha5_cache_e'),
            document.querySelector('#linha5_eprom_p'),
            document.querySelector('#linha5_eprom_r'),
            document.querySelector('#linha5_eprom_o'),
            document.querySelector('#linha5_eprom_m')
        ];
        
        for (let i = 0; i < epromColor.length; i++) {
            const idAtual = epromColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }

    if((dma_d + dma_m + dma_a).toUpperCase() == 'DMA'){
        var dmaColor = [
            document.querySelector('#linha2_dma_d'),
            document.querySelector('#linha3_ram_m'),
            document.querySelector('#linha4_dma_a')
        ];
        
        for (let i = 0; i < dmaColor.length; i++) {
            const idAtual = dmaColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }
    
    if((ram_r + ram_a + ram_m).toUpperCase() == 'RAM'){
        var ramColor = [
            document.querySelector('#linha3_ram_r'),
            document.querySelector('#linha3_ram_a'),
            document.querySelector('#linha3_ram_m')
        ];
        
        for (let i = 0; i < ramColor.length; i++) {
            const idAtual = ramColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }

    if((rom_r + rom_o + rom_m).toUpperCase() == 'ROM'){
        var romColor = [
            document.querySelector('#linha3_ram_r'),
            document.querySelector('#linha4_rom_o'),
            document.querySelector('#linha5_eprom_m')
        ];
        
        for (let i = 0; i < romColor.length; i++) {
            const idAtual = romColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }

    if((threads_t+ threads_h + threads_r + threads_e + threads_a + threads_d + threads_s).toUpperCase() == 'THREADS'){
        var threadsColor = [
            document.querySelector('#linha3_threads_t'),
            document.querySelector('#linha4_threads_h'),
            document.querySelector('#linha5_eprom_r'),
            document.querySelector('#linha6_threads_e'),
            document.querySelector('#linha7_threads_a'),
            document.querySelector('#linha8_threads_d'),
            document.querySelector('#linha9_threads_s')
        ];
        
        for (let i = 0; i < threadsColor.length; i++) {
            const idAtual = threadsColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }

    if((memo_m + memo_e + memo_m2 + memo_o + memo_r + memo_i + memo_a + memo_d + memo_e2 + memo_m3 + memo_a2 + memo_s + memo_s2 + memo_a3).toUpperCase() == 'MEMORIADEMASSA'){
        var memoriaColor = [
            document.querySelector('#linha12_memoriademassa_m'),
            document.querySelector('#linha12_memoriademassa_e'),
            document.querySelector('#linha12_memoriademassa_m2'),
            document.querySelector('#linha12_memoriademassa_o'),
            document.querySelector('#linha12_memoriademassa_r'),
            document.querySelector('#linha12_memoriademassa_i'),
            document.querySelector('#linha12_memoriademassa_a'),
            document.querySelector('#linha12_memoriademassa_d'),
            document.querySelector('#linha12_memoriademassa_e2'),
            document.querySelector('#linha12_memoriademassa_m3'),
            document.querySelector('#linha12_memoriademassa_a2'),
            document.querySelector('#linha12_memoriademassa_s'),
            document.querySelector('#linha12_memoriademassa_s2'),
            document.querySelector('#linha12_memoriademassa_a3')
        ];
        
        for (let i = 0; i < memoriaColor.length; i++) {
            const idAtual = memoriaColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }

    if((flash_f+ flash_l + flash_a + flash_s + flash_h).toUpperCase() == 'FLASH'){
        var flashColor = [
            document.querySelector('#linha9_flash_f'),
            document.querySelector('#linha9_flash_l'),
            document.querySelector('#linha9_flash_a'),
            document.querySelector('#linha9_flash_s'),
            document.querySelector('#linha9_flash_h')
        ];
        
        for (let i = 0; i < flashColor.length; i++) {
            const idAtual = flashColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }

    if((i5_i+ i5_5).toUpperCase() == 'I5'){
        var i5Color = [
            document.querySelector('#linha6_regis_i'),
            document.querySelector('#linha6_i5_5')
        ];
        
        for (let i = 0; i < i5Color.length; i++) {
            const idAtual = i5Color[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }
    if((i7_i+ i7_7).toUpperCase() == 'I7'){
        var i7Color = [
            document.querySelector('#linha12_memoriademassa_i'),
            document.querySelector('#linha13_i7_7')
        ];
        
        for (let i = 0; i < i7Color.length; i++) {
            const idAtual = i7Color[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }
    if((dualcore_d+ dualcore_u + dualcore_a + dualcore_l + dualcore_c + dualcore_o + dualcore_r + dualcore_e).toUpperCase() == 'DUALCORE'){
        var dualcoreColor = [
            document.querySelector('#linha8_threads_d'),
            document.querySelector('#linha8_dualcore_u'),
            document.querySelector('#linha8_dualcore_a'),
            document.querySelector('#linha8_dualcore_l'),
            document.querySelector('#linha8_dualcore_c'),
            document.querySelector('#linha8_dualcore_o'),
            document.querySelector('#linha8_dualcore_r'),
            document.querySelector('#linha8_dualcore_e')
        ];
        
        for (let i = 0; i < dualcoreColor.length; i++) {
            const idAtual = dualcoreColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }
    if((quadcore_q + quadcore_u + quadcore_a + quadcore_d + quadcore_c + quadcore_o + quadcore_r + quadcore_e).toUpperCase() == 'QUADCORE'){
        var quadColor = [
            document.querySelector('#linha4_quadcore_q'),
            document.querySelector('#linha4_quadcore_u'),
            document.querySelector('#linha4_quadcore_a'),
            document.querySelector('#linha4_quadcore_d'),
            document.querySelector('#linha4_quadcore_c'),
            document.querySelector('#linha4_quadcore_o'),
            document.querySelector('#linha4_quadcore_r'),
            document.querySelector('#linha4_quadcore_e')
        ];
        
        for (let i = 0; i < quadColor.length; i++) {
            const idAtual = quadColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }
    if((databus_d+ databus_a + databus_t + databus_a2 + databus_b + databus_u + databus_s).toUpperCase() == 'DATABUS'){
        var databusColor = [
            document.querySelector('#linha10_databus_d'),
            document.querySelector('#linha10_databus_a'),
            document.querySelector('#linha10_databus_t'),
            document.querySelector('#linha10_databus_a2'),
            document.querySelector('#linha10_databus_b'),
            document.querySelector('#linha10_databus_u'),
            document.querySelector('#linha10_databus_s')
        ];
        
        for (let i = 0; i < databusColor.length; i++) {
            const idAtual = databusColor[i];
            
            idAtual.classList.add('correto');
            idAtual.disabled = true;
        }
    }
}


function verLocal(pergunta){
    var cs_c = linha1_cs_c;
    var cs_s = linha1_cs_s;

    var cpu_c = linha1_cpu_c;
    var cpu_p = linha1_cpu_p;
    var cpu_u = linha1_cpu_u;

    var cache_c = linha1_cs_c;
    var cache_a = linha2_cache_a;
    var cache_c = linha3_cache_c;
    var cache_h = linha4_cache_h;
    var cache_e = linha5_cache_e;

    var ula_u = linha1_cpu_u;
    var ula_l = linha2_ula_l;
    var ula_a = linha3_ram_a;

    var quadcore_q = linha4_quadcore_q;
    var quadcore_u = linha4_quadcore_u;
    var quadcore_a = linha4_quadcore_a;
    var quadcore_d = linha4_quadcore_d;
    var quadcore_c = linha4_quadcore_c;
    var quadcore_o = linha4_quadcore_o;
    var quadcore_r = linha4_quadcore_r;
    var quadcore_e = linha4_quadcore_e;

    var regis_r = linha3_regis_r;
    var regis_e = linha4_quadcore_e;
    var regis_g = linha5_regis_g;
    var regis_i = linha6_regis_i;
    var regis_s = linha7_regis_s;
    var regis_t = linha8_regis_t;
    var regis_r2 = linha9_regis_r2;
    var regis_a = linha10_regis_a;
    var regis_d = linha11_regis_d;
    var regis_o = linha12_regis_o;
    var regis_r3 = linha13_regis_r3;
    var regis_e2 = linha14_regis_e2;
    var regis_s2 = linha15_regis_s2;

    var eprom_e = linha5_cache_e;
    var eprom_p = linha5_eprom_p;
    var eprom_r = linha5_eprom_r;
    var eprom_o = linha5_eprom_o;
    var eprom_m = linha5_eprom_m;

    var dma_d = linha2_dma_d;
    var dma_m = linha3_ram_m;
    var dma_a = linha4_dma_a;

    var ram_r = linha3_ram_r;
    var ram_a = linha3_ram_a;
    var ram_m = linha3_ram_m;

    var rom_r = linha3_ram_r;
    var rom_o = linha4_rom_o;
    var rom_m = linha5_eprom_m;

    var threads_t = linha3_threads_t;
    var threads_h = linha4_threads_h;
    var threads_r = linha5_eprom_r;
    var threads_e = linha6_threads_e;
    var threads_a = linha7_threads_a;
    var threads_d = linha8_threads_d;
    var threads_s = linha9_threads_s;

    var memo_m = linha12_memoriademassa_m;
    var memo_e = linha12_memoriademassa_e;
    var memo_m2 = linha12_memoriademassa_m2;
    var memo_o = linha12_memoriademassa_o;
    var memo_r = linha12_memoriademassa_r;
    var memo_i = linha12_memoriademassa_i;
    var memo_a = linha12_memoriademassa_a;
    var memo_d = linha12_memoriademassa_d;
    var memo_e2 = linha12_memoriademassa_e2;
    var memo_m3 = linha12_memoriademassa_m3;
    var memo_a2 = linha12_memoriademassa_a2;
    var memo_s = linha12_memoriademassa_s;
    var memo_s2 = linha12_memoriademassa_s2;
    var memo_a3 = linha12_memoriademassa_a3;

    var flash_f = linha9_flash_f;
    var flash_l = linha9_flash_l;
    var flash_a = linha9_flash_a;
    var flash_s = linha9_flash_s;
    var flash_h = linha9_flash_h;

    var i5_i = linha6_regis_i;
    var i5_5 = linha6_i5_5;

    var i7_i = linha12_memoriademassa_i; 
    var i7_7 = linha13_i7_7;

    var dualcore_d = linha8_threads_d;
    var dualcore_u = linha8_dualcore_u;
    var dualcore_a = linha8_dualcore_a;
    var dualcore_l = linha8_dualcore_l;
    var dualcore_c = linha8_dualcore_c;
    var dualcore_o = linha8_dualcore_o;
    var dualcore_r = linha8_dualcore_r;
    var dualcore_e = linha8_dualcore_e;

    var databus_d = linha10_databus_d;
    var databus_a = linha10_databus_a;
    var databus_t = linha10_databus_t;
    var databus_a2 = linha10_databus_a2;
    var databus_b = linha10_databus_b;
    var databus_u = linha10_databus_u;
    var databus_s = linha10_databus_s;

    var addbus_a = linha3_addressbus_a;
    var addbus_d = linha4_quadcore_d;
    var addbus_d2 = linha5_addressbus_d;
    var addbus_r = linha6_addressbus_r;
    var addbus_e = linha7_addressbus_e;
    var addbus_s = linha8_addressbus_s;
    var addbus_s2 = linha9_flash_s;
    var addbus_b = linha10_databus_b;
    var addbus_u = linha11_addressbus_u;
    var addbus_s3 = linha12_memoriademassa_s;

    var linhas = document.querySelectorAll('input');

    linhas.forEach(function(linha){
        linha.classList.remove('destacado');
    })

 
    if(pergunta == 1){
        cpu_c.classList.add('destacado');
        cpu_p.classList.add('destacado');
        cpu_u.classList.add('destacado');
    } else if(pergunta == 2){
        ula_u.classList.add('destacado');
        ula_l.classList.add('destacado');
        ula_a.classList.add('destacado');
    } else if(pergunta == 3){
        regis_r.classList.add('destacado');
        regis_e.classList.add('destacado');
        regis_g.classList.add('destacado');
        regis_i.classList.add('destacado');
        regis_s.classList.add('destacado');
        regis_t.classList.add('destacado');
        regis_r2.classList.add('destacado');
        regis_a.classList.add('destacado');
        regis_d.classList.add('destacado');
        regis_o.classList.add('destacado');
        regis_r3.classList.add('destacado'); 
        regis_e2.classList.add('destacado'); 
        regis_s2.classList.add('destacado'); 
    } else if(pergunta == 4){
        ram_r.classList.add('destacado');
        ram_a.classList.add('destacado');
        ram_m.classList.add('destacado');
    } else if(pergunta == 5){
        rom_r.classList.add('destacado');
        rom_o.classList.add('destacado');
        rom_m.classList.add('destacado');
    } else if(pergunta == 6){
        eprom_e.classList.add('destacado');
        eprom_p.classList.add('destacado');
        eprom_r.classList.add('destacado');
        eprom_o.classList.add('destacado');
        eprom_m.classList.add('destacado');
    } else if(pergunta == 7){
        flash_f.classList.add('destacado');
        flash_l.classList.add('destacado');   
        flash_a.classList.add('destacado');   
        flash_s.classList.add('destacado');   
        flash_h.classList.add('destacado');   
    } else if(pergunta == 8){
        memo_m.classList.add('destacado');
        memo_e.classList.add('destacado');
        memo_m2.classList.add('destacado');
        memo_o.classList.add('destacado');
        memo_r.classList.add('destacado');
        memo_i.classList.add('destacado');
        memo_a.classList.add('destacado');
        memo_d.classList.add('destacado');
        memo_e2.classList.add('destacado');
        memo_m3.classList.add('destacado');
        memo_a2.classList.add('destacado');
        memo_s.classList.add('destacado');
        memo_s2.classList.add('destacado'); 
        memo_a3.classList.add('destacado'); 
    } else if(pergunta == 9){
        dma_d.classList.add('destacado');
        dma_m.classList.add('destacado');
        dma_a.classList.add('destacado');
    } else if(pergunta == 10){
        cs_c.classList.add('destacado');
        cs_s.classList.add('destacado');
    } else if(pergunta == 11){
        addbus_a.classList.add('destacado');
        addbus_d.classList.add('destacado');
        addbus_d2.classList.add('destacado');
        addbus_r.classList.add('destacado');
        addbus_e.classList.add('destacado');
        addbus_s.classList.add('destacado');
        addbus_s2.classList.add('destacado');
        addbus_b.classList.add('destacado');
        addbus_u.classList.add('destacado');
        addbus_s3.classList.add('destacado');
    } else if(pergunta == 12){
        databus_d.classList.add('destacado')
        databus_a.classList.add('destacado')
        databus_t.classList.add('destacado')
        databus_a2.classList.add('destacado')
        databus_b.classList.add('destacado')
        databus_u.classList.add('destacado')
        databus_s.classList.add('destacado')
    } else if(pergunta == 13){
        i5_i.classList.add('destacado');
        i5_5.classList.add('destacado');
    } else if(pergunta == 14){
        i7_i.classList.add('destacado');
        i7_7.classList.add('destacado');
    } else if(pergunta == 15){
        dualcore_d.classList.add('destacado');
        dualcore_u.classList.add('destacado');
        dualcore_a.classList.add('destacado');
        dualcore_l.classList.add('destacado');
        dualcore_c.classList.add('destacado');
        dualcore_o.classList.add('destacado');
        dualcore_r.classList.add('destacado');
        dualcore_e.classList.add('destacado');
    } else if(pergunta == 16){
        quadcore_q.classList.add('destacado');
        quadcore_u.classList.add('destacado');
        quadcore_a.classList.add('destacado');
        quadcore_d.classList.add('destacado');
        quadcore_c.classList.add('destacado');
        quadcore_o.classList.add('destacado');
        quadcore_r.classList.add('destacado');
        quadcore_e.classList.add('destacado');
    } else if(pergunta == 17){
        threads_t.classList.add('destacado');
        threads_h.classList.add('destacado');
        threads_r.classList.add('destacado');
        threads_e.classList.add('destacado');
        threads_a.classList.add('destacado');
        threads_d.classList.add('destacado');
        threads_s.classList.add('destacado');
    } else if(pergunta == 18){
        cache_c.classList.add('destacado');
        cache_a.classList.add('destacado');
        cache_c.classList.add('destacado');
        cache_h.classList.add('destacado');
        cache_e.classList.add('destacado');
    }
}