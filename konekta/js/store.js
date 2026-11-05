/* KONEKTA — núcleo partilhado da demonstração. Dados locais neste navegador; sem backend. */
(() => {
  'use strict';
  const KEY='konekta.demo.v2', LEGACY='konekta.demo.v1';
  const uid=p=>`${p}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,7)}`;
  const now=()=>new Date().toISOString();
  const seed={version:2,users:[{id:'client-demo',role:'client',name:'Ana Silva',email:'ana@demo.konekta.ao'}],
    categories:['Serviços domésticos','Limpeza','Canalização','Electricidade','Manutenção e reparações','Construção','Automóvel','Tecnologia','Beleza e bem-estar','Eventos','Educação','Serviços empresariais'],
    locations:['Talatona','Maianga','Kilamba','Benfica','Viana','Ingombota','Camama','Luanda'],
    professionals:[
      {id:'pro-carlos',name:'Carlos Mendes',service:'Electricista',category:'Electricidade',location:'Talatona',experience:'8 anos',rating:4.9,reviews:32,priceType:'from',price:15000,available:true,verified:true,description:'Instalações, manutenção e diagnóstico eléctrico.'},
      {id:'pro-ana',name:'Ana Ferreira',service:'Limpeza doméstica',category:'Limpeza',location:'Maianga',experience:'6 anos',rating:4.8,reviews:24,priceType:'fixed',price:18000,available:true,verified:true,description:'Limpeza residencial, organização e engomadoria.'},
      {id:'pro-jose',name:'José Silva',service:'Canalizador',category:'Canalização',location:'Kilamba',experience:'10 anos',rating:4.9,reviews:41,priceType:'quote',price:null,available:true,verified:false,description:'Reparação de fugas, torneiras e instalações.'},
      {id:'pro-manuel',name:'Manuel Costa',service:'Técnico de refrigeração',category:'Manutenção e reparações',location:'Benfica',experience:'7 anos',rating:4.7,reviews:19,priceType:'from',price:20000,available:false,verified:false,description:'Instalação e manutenção de ar condicionado.'}
    ],requests:[],offers:[],messages:[],reviews:[],notifications:[]};
  const clone=x=>JSON.parse(JSON.stringify(x));
  function read(){let data;try{data=JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){}
    if(!data){try{const old=JSON.parse(localStorage.getItem(LEGACY)||'null');if(old){data={...clone(seed),...old,version:2};data.professionals=old.professionals?.length?old.professionals:clone(seed.professionals);data.requests=(old.requests||[]).map(r=>({...r,budget:r.budget||'',budgetPreference:r.budgetPreference||'open',offers:r.offers||[]}));}}catch(e){}}
    if(!data||!Array.isArray(data.requests)||!Array.isArray(data.offers))data=clone(seed);
    data.version=2;['users','professionals','requests','offers','messages','reviews','notifications'].forEach(k=>{if(!Array.isArray(data[k]))data[k]=[]});localStorage.setItem(KEY,JSON.stringify(data));return data;
  }
  let state=read();
  const emit=()=>{localStorage.setItem(KEY,JSON.stringify(state));window.dispatchEvent(new CustomEvent('konekta:updated',{detail:api.snapshot()}));};
  const api={snapshot:()=>clone(state),professionals:()=>clone(state.professionals),categories:()=>clone(state.categories),
    requests:(clientId='client-demo')=>clone(state.requests.filter(r=>r.clientId===clientId).sort((a,b)=>b.createdAt.localeCompare(a.createdAt))),
    openRequests:()=>clone(state.requests.filter(r=>['submitted','quoted'].includes(r.status))),offersFor:id=>clone(state.offers.filter(o=>o.requestId===id)),
    offersByProfessional:id=>clone(state.offers.filter(o=>o.professionalId===id)),
    createRequest(d){if(!d?.title?.trim()||!d?.description?.trim()||!d?.category||!d?.location)throw Error('Preencha o serviço, a categoria, a localização e a descrição.');if(d.budgetPreference==='range'&&!(Number(d.budget)>0))throw Error('Indique o valor máximo que tem em mente.');const r={id:uid('req'),clientId:'client-demo',title:d.title.trim(),description:d.description.trim(),category:d.category,location:d.location,preferredDate:d.preferredDate||'',budgetPreference:d.budgetPreference||'open',budget:d.budgetPreference==='range'?Number(d.budget):null,status:'submitted',createdAt:now(),updatedAt:now(),demo:true};state.requests.unshift(r);state.notifications.unshift({id:uid('not'),for:'professional',title:'Novo pedido disponível',body:r.title,requestId:r.id,read:false,createdAt:now()});emit();return clone(r)},
    addOffer(requestId,d){const r=state.requests.find(x=>x.id===requestId);if(!r)throw Error('Pedido não encontrado.');if(state.offers.some(o=>o.requestId===requestId&&o.professionalId===d.professionalId&&o.status!=='withdrawn'))throw Error('Já enviou uma proposta para este pedido.');const amount=Number(d.amount);if(!(amount>0))throw Error('Indique um preço válido.');const o={id:uid('off'),requestId,professionalId:d.professionalId,amount,note:(d.note||'').trim(),duration:(d.duration||'').trim(),status:'pending',createdAt:now(),demo:true};state.offers.unshift(o);r.status='quoted';r.updatedAt=now();state.notifications.unshift({id:uid('not'),for:'client',title:'Recebeu uma proposta',body:`${amount.toLocaleString('pt-PT')} Kz · ${r.title}`,requestId:r.id,offerId:o.id,read:false,createdAt:now()});emit();return clone(o)},
    acceptOffer(id){const o=state.offers.find(x=>x.id===id);if(!o)throw Error('Proposta não encontrada.');const r=state.requests.find(x=>x.id===o.requestId);if(!r)throw Error('Pedido não encontrado.');if(o.status!=='pending')throw Error('Esta proposta já não está disponível.');o.status='accepted';r.status='contracted';r.professionalId=o.professionalId;r.acceptedOfferId=id;r.updatedAt=now();state.offers.filter(x=>x.requestId===r.id&&x.id!==id).forEach(x=>x.status='declined');state.notifications.unshift({id:uid('not'),for:'professional',title:'Proposta aceite',body:r.title,requestId:r.id,read:false,createdAt:now()});emit();return clone(r)},
    updateRequest(id,patch){const r=state.requests.find(x=>x.id===id);if(!r)throw Error('Pedido não encontrado.');if(!['in_progress','completed','cancelled'].includes(patch.status))throw Error('Estado inválido.');r.status=patch.status;r.updatedAt=now();state.notifications.unshift({id:uid('not'),for:'client',title:'Pedido actualizado',body:r.title,requestId:r.id,read:false,createdAt:now()});emit();return clone(r)},
    addMessage(requestId,sender,text){if(!text?.trim())return;state.messages.push({id:uid('msg'),requestId,sender,text:text.trim(),createdAt:now()});emit()},
    messagesFor:id=>clone(state.messages.filter(m=>m.requestId===id)),
    addCompanyRequest(d){const r={...d,id:uid('biz'),clientId:'company-demo',status:'submitted',createdAt:now(),updatedAt:now(),demo:true};state.requests.unshift(r);emit();return clone(r)},
    resetDemo(){state=clone(seed);emit()}};
  window.addEventListener('storage',e=>{if(e.key===KEY){state=read();window.dispatchEvent(new CustomEvent('konekta:updated',{detail:api.snapshot()}));}});
  window.KonektaStore=Object.freeze(api);
})();
