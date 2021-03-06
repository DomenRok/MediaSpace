# MediaSpace

MediaSpace is a centralized platform, bringing you a unique experience, delivering an All-in-one convinient package to store, view, browse, search and upload/download all types of media.

## Roadmap
TBD..  



## Stack
Django  
React-typescript  
MySQL  

## Core functionality
Browse content    
Upload/download content  
Comment  
Recommendation system  
...  

## Requirements
Recommend a virtual enviorment (outside the project folder, so it won't get pushed to git)

```python
python -m venv env
```

To activate the virtual enviorment:  
```python
source env/Scripts/activate
```

Then install the dependencies and run the server. (instructions below)

```powershell
(pyenv) PS C:\Users\Domen Brunček\Desktop\FRI\MediaSpace-folder\MediaSpace\MediaSpace> ls


    Path: ..\Path\To\Project\MediaSpace-folder\MediaSpace\MediaSpace


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----      8. 01. 2020     12:57                api
d-----      9. 01. 2020     12:24                content
d-----      9. 01. 2020     09:40                MediaSpace
d-----      9. 01. 2020     11:53                recomendations
d-----      8. 01. 2020     13:01                users
-a----      5. 12. 2019     15:45              6 .gitignore
-a----      5. 12. 2019     14:03            651 manage.py
-a----      8. 01. 2020     09:54             61 requirements.txt
-a----      8. 01. 2020     09:54              0 __init__.py
```

```python
pip install -r requirements.txt
```

## Launch Django
```py manage.py runserver```  
  
## REST-api
Detailed instructions can be found at
`http://127.0.0.1:8000/doc/`  
or  
`http://127.0.0.1:8000/`  



## Authentication
### get Token
```curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'username=test&password=geslo123' 'http://127.0.0.1:8000/api/v1/users/login/'```

### Token auth
For clients to authenticate, the token key should be included in the Authorization HTTP header. The key should be prefixed by the string literal "Token", with whitespace separating the two strings. For example:

```Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b```


