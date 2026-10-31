import axiosService from "../api/axiosService";
//save Resume API:called by ResumeInput component when finish button clicks
export const saveResumeApi=async(resumeDetails)=>
{
   return await axiosService("POST","/resumes",resumeDetails)
}

//view Resume Api:called by View Component when page loads to browser

export const viewResumeApi=async(resumeId)=>
{
   return await axiosService("GET",`/resumes/${resumeId}`,{})
}
//called by Save component when page loads in browser
export const getAllResumeApi=async()=>
{
   return await axiosService("GET",`/resumes/`,{})
}

//remove resume api:called by Save Component when delete button clicks
export const deleteAllResumeApi=async(resumeId)=>
{
    return await axiosService("DELETE",`/resumes/${resumeId}`,{})
}


//Update resume api:called by Edit Component when update button clicks
export const editAllResumeApi=async(resumeId,resumeDetails)=>
{
    return await axiosService("PUT",`/resumes/${resumeId}`,resumeDetails)
}

//Download resume api:called by View Component when download button clicks
export const downloadResumeApi=async(resumeDetails)=>
{
    return await axiosService("POST",`/downloads`,resumeDetails)
}

//getAllDownloadResumeApi:called by Download Component when page loads in browser
export const getAllDownloadResumeApi=async()=>
{
    return await axiosService("GET",`/downloads`,{})
}