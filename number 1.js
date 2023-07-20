Start
    Display "Welcome to Talent Growth Opportunity Application"
    Display "Please provide the following information:"
    
    Input name
    Input email
    Input phone number
    Input education
    Input work_experience
    Input certifications
    Input skills
    Input interests
    
    Display "Select the type of opportunity you are interested in:"
    Input opportunity_type

if opportunity_type is "Internship" then
        Display "Apply for Internship"
        Input internship_title
        Input internship_duration
        Input resume

    else if opportunity_type is "Training" then
        Display "Apply for Training"
        Input training_title
        Input training_duration
        Input training_reason
    else
        Display "Invalid opportunity type selected. Please start again."
End
        
    Display "Thank you for your application!"
    Display "Please review your information:"
    Display "Name:", name
    Display "Email:", email
    Display "Phone:", phone number
    Display "Opportunity Type:", opportunity_type

if opportunity_type is "Internship" then
        Display "Title:", internship_title
        Display "Experience:", job_experience or internship_duration
        Display "Resume:", resume
    else if opportunity_type is "Training" then
        Display "Title:", training_title
        Display "Duration:", training_duration
        Display "Reason for Training:", training_reason
        
    Display "Please make sure all the information is correct."
    Input confirmation

if confirmation is "Yes" then
        Display "Application submitted successfully!"
    else if confirmation is "No" then
        Display "Please restart the application and provide correct information."
    else
        Display "Invalid input. Please start again."

End