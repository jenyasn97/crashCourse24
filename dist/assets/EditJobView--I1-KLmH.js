import{s as p,e as b,g as y,c as _,a as o,x as h,p as s,y as r,z as l,h as f,o as $,A as x,B as v}from"./index-BIKw66O9.js";import{a as m}from"./axios-B4uVmeYG.js";const K={class:"bg-green-50"},g={class:"container m-auto max-w-2xl py-24"},w={class:"m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0"},j=o("h2",{class:"mb-6 text-center text-3xl font-semibold"},"Edit Job",-1),E={class:"mb-4"},U=o("label",{for:"type",class:"mb-2 block font-bold text-gray-700"},"Job Type",-1),V=o("option",{value:"Full-Time"},"Full-Time",-1),k=o("option",{value:"Part-Time"},"Part-Time",-1),P=o("option",{value:"Remote"},"Remote",-1),J=o("option",{value:"Internship"},"Internship",-1),T=[V,k,P,J],C={class:"mb-4"},q=o("label",{class:"mb-2 block font-bold text-gray-700"},"Job Listing Name",-1),B={class:"mb-4"},I=o("label",{for:"description",class:"mb-2 block font-bold text-gray-700"},"Description",-1),L={class:"mb-4"},M=o("label",{for:"type",class:"mb-2 block font-bold text-gray-700"},"Salary",-1),N=x('<option value="Under $50K">under $50K</option><option value="$50K - $60K">$50 - $60K</option><option value="$60K - $70K">$60 - $70K</option><option value="$70K - $80K">$70 - $80K</option><option value="$80K - $90K">$80 - $90K</option><option value="$90K - $100K">$90 - $100K</option><option value="$100K - $125K">$100 - $125K</option><option value="$125K - $150K">$125 - $150K</option><option value="$150K - $175K">$150 - $175K</option><option value="$175K - $200K">$175 - $200K</option><option value="Over $200K">Over $200K</option>',11),S=[N],A={class:"mb-4"},D=o("label",{class:"mb-2 block font-bold text-gray-700"}," Location ",-1),F=o("h3",{class:"mb-5 text-2xl"},"Company Info",-1),O={class:"mb-4"},R=o("label",{for:"company",class:"mb-2 block font-bold text-gray-700"},"Company Name",-1),z={class:"mb-4"},W=o("label",{for:"company_description",class:"mb-2 block font-bold text-gray-700"},"Company Description",-1),G={class:"mb-4"},H=o("label",{for:"contact_email",class:"mb-2 block font-bold text-gray-700"},"Contact Email",-1),Q={class:"mb-4"},X=o("label",{for:"contact_phone",class:"mb-2 block font-bold text-gray-700"},"Contact Phone",-1),Y=o("div",null,[o("button",{class:"focus:shadow-outline w-full rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none",type:"submit"}," Update Job ")],-1),no={__name:"EditJobView",setup(Z){const c=f().params.id,t=p({type:"Full-Time",title:"",description:"",salary:"",location:"",company:{name:"",description:"",contactEmail:"",contactPhone:""}}),a=p({job:{},isLoading:!0}),d=b();async function u(){const i={type:t.type,title:t.title,description:t.description,salary:t.salary,location:t.location,company:{name:t.company.name,description:t.company.description,contactEmail:t.company.contactEmail,contactPhone:t.company.contactPhone}};try{const e=await m.put(`/api/jobs/${c}`,i);d.success("Job Updated successfully"),v.push(`/jobs/${e.data.id}`)}catch(e){console.error("Error fetching job",e),d.error("Job was not added")}}return y(async()=>{try{const i=await m.get(`/api/jobs/${c}`);a.job=i.data,t.type=a.job.type,t.title=a.job.title,t.description=a.job.description,t.salary=a.job.salary,t.location=a.job.location,t.company.name=a.job.company.name,t.company.description=a.job.company.description,t.company.contactEmail=a.job.company.contactEmail,t.company.contactPhone=a.job.company.contactPhone}catch(i){console.error("Error fetching job ",i)}finally{a.isLoading=!1}}),(i,e)=>($(),_("section",K,[o("div",g,[o("div",w,[o("form",{onSubmit:h(u,["prevent"])},[j,o("div",E,[U,s(o("select",{"onUpdate:modelValue":e[0]||(e[0]=n=>t.type=n),id:"type",name:"type",class:"w-full rounded border px-3 py-2",required:""},T,512),[[r,t.type]])]),o("div",C,[q,s(o("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>t.title=n),type:"text",id:"name",name:"name",class:"mb-2 w-full rounded border px-3 py-2",placeholder:"eg. Beautiful Apartment In Miami",required:""},null,512),[[l,t.title]])]),o("div",B,[I,s(o("textarea",{"onUpdate:modelValue":e[2]||(e[2]=n=>t.description=n),id:"description",name:"description",class:"w-full rounded border px-3 py-2",rows:"4",placeholder:"Add any job duties, expectations, requirements, etc"},null,512),[[l,t.description]])]),o("div",L,[M,s(o("select",{"onUpdate:modelValue":e[3]||(e[3]=n=>t.salary=n),id:"salary",name:"salary",class:"w-full rounded border px-3 py-2",required:""},S,512),[[r,t.salary]])]),o("div",A,[D,s(o("input",{"onUpdate:modelValue":e[4]||(e[4]=n=>t.location=n),type:"text",id:"location",name:"location",class:"mb-2 w-full rounded border px-3 py-2",placeholder:"Company Location",required:""},null,512),[[l,t.location]])]),F,o("div",O,[R,s(o("input",{"onUpdate:modelValue":e[5]||(e[5]=n=>t.company.name=n),type:"text",id:"company",name:"company",class:"w-full rounded border px-3 py-2",placeholder:"Company Name"},null,512),[[l,t.company.name]])]),o("div",z,[W,s(o("textarea",{"onUpdate:modelValue":e[6]||(e[6]=n=>t.company.description=n),id:"company_description",name:"company_description",class:"w-full rounded border px-3 py-2",rows:"4",placeholder:"What does your company do?"},null,512),[[l,t.company.description]])]),o("div",G,[H,s(o("input",{"onUpdate:modelValue":e[7]||(e[7]=n=>t.company.contactEmail=n),type:"email",id:"contact_email",name:"contact_email",class:"w-full rounded border px-3 py-2",placeholder:"Email address for applicants",required:""},null,512),[[l,t.company.contactEmail]])]),o("div",Q,[X,s(o("input",{"onUpdate:modelValue":e[8]||(e[8]=n=>t.company.contactPhone=n),type:"tel",id:"contact_phone",name:"contact_phone",class:"w-full rounded border px-3 py-2",placeholder:"Optional phone for applicants"},null,512),[[l,t.company.contactPhone]])]),Y],32)])])]))}};export{no as default};